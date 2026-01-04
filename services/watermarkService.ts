
/**
 * Simplified Audio Watermarking Service (DSSS + DWT Logic)
 * Note: Real-time DWT on large audio buffers is computationally intensive.
 * This implementation simulates the logic for the portfolio demo.
 */

export class AudioWatermarkDSSS {
  private alpha: number = 0.05; // Strength factor

  /**
   * Generates a Pseudo-Random Noise (PN) sequence using a seed.
   * Antipodal: values are +1 or -1.
   */
  private generatePNSequence(seed: number, length: number): number[] {
    const sequence: number[] = [];
    let s = seed;
    // Simple LCG or seeded random simulation
    for (let i = 0; i < length; i++) {
      s = (s * 1664525 + 1013904223) % 4294967296;
      sequence.push(s > 2147483648 ? 1 : -1);
    }
    return sequence;
  }

  /**
   * Simulates DWT Level 2 decomposition and embedding into cD2 sub-band.
   * Logic: Y = X + alpha * W
   */
  public async embed(audioData: Float32Array, key: number): Promise<{ watermarked: Float32Array; pn: number[] }> {
    // In a real implementation, we'd apply DWT (Haar/db1) here.
    // We simulate by embedding in a specific frequency range or specific indices.
    const n = audioData.length;
    const watermarked = new Float32Array(audioData);
    const pnSeq = this.generatePNSequence(key, Math.floor(n / 4)); // cD2 is 1/4 size of N

    // Simulating embedding in the "cD2" region (high frequencies)
    // We'll use a stride to mimic the DWT downsampling effect
    for (let i = 0; i < pnSeq.length; i++) {
      const idx = i * 4 + 2; // Offset to mimic cD2 coefficients
      if (idx < n) {
        watermarked[idx] += this.alpha * pnSeq[i];
      }
    }

    return { watermarked, pn: pnSeq };
  }

  /**
   * Extracts the watermark using Normalized Cross-Correlation.
   * Score = sum(coeffs * PN)
   */
  public extract(suspectAudio: Float32Array, pnSeq: number[]): { correlation: number; isValid: boolean } {
    let score = 0;
    let count = 0;

    for (let i = 0; i < pnSeq.length; i++) {
      const idx = i * 4 + 2;
      if (idx < suspectAudio.length) {
        score += suspectAudio[idx] * pnSeq[i];
        count++;
      }
    }

    const normalizedScore = score / count;
    // If original signal X was mean 0 and independent of PN, score ~ alpha
    // We use a threshold relative to alpha
    const threshold = this.alpha * 0.5;
    
    return {
      correlation: normalizedScore,
      isValid: normalizedScore > threshold
    };
  }

  /**
   * Simulates Gaussian Noise attack
   */
  public addNoise(data: Float32Array, level: number = 0.01): Float32Array {
    const noisy = new Float32Array(data);
    for (let i = 0; i < noisy.length; i++) {
      noisy[i] += (Math.random() - 0.5) * level;
    }
    return noisy;
  }

  /**
   * Calculate Peak Signal to Noise Ratio
   */
  public calculatePSNR(original: Float32Array, processed: Float32Array): number {
    let mse = 0;
    for (let i = 0; i < original.length; i++) {
      mse += Math.pow(original[i] - processed[i], 2);
    }
    mse /= original.length;
    if (mse === 0) return 100;
    const maxI = 1.0;
    return 10 * Math.log10(Math.pow(maxI, 2) / mse);
  }
}

export const watermarkService = new AudioWatermarkDSSS();
