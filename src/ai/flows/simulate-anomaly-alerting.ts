'use server';

/**
 * @fileOverview Simulates AI-driven anomaly detection in fiscal data.
 *
 * - simulateAnomalyAlerting - A function that simulates anomaly detection and returns a description of the potential anomaly.
 * - SimulateAnomalyAlertingInput - The input type for the simulateAnomalyAlerting function.
 * - SimulateAnomalyAlertingOutput - The return type for the simulateAnomalyAlerting function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SimulateAnomalyAlertingInputSchema = z.object({
  financialReportData: z
    .string()
    .describe('Financial report data to analyze for anomalies.'),
});
export type SimulateAnomalyAlertingInput = z.infer<
  typeof SimulateAnomalyAlertingInputSchema
>;

const SimulateAnomalyAlertingOutputSchema = z.object({
  anomalyDescription: z
    .string()
    .describe('Description of the potential anomaly detected.'),
});
export type SimulateAnomalyAlertingOutput = z.infer<
  typeof SimulateAnomalyAlertingOutputSchema
>;

export async function simulateAnomalyAlerting(
  input: SimulateAnomalyAlertingInput
): Promise<SimulateAnomalyAlertingOutput> {
  return simulateAnomalyAlertingFlow(input);
}

const prompt = ai.definePrompt({
  name: 'simulateAnomalyAlertingPrompt',
  input: {schema: SimulateAnomalyAlertingInputSchema},
  output: {schema: SimulateAnomalyAlertingOutputSchema},
  prompt: `You are an AI assistant specializing in detecting anomalies in financial reports.

  Analyze the following financial report data and provide a description of any potential anomalies you detect. Be concise and focus on potential fraud or errors.
  Financial Report Data: {{{financialReportData}}}`,
});

const simulateAnomalyAlertingFlow = ai.defineFlow(
  {
    name: 'simulateAnomalyAlertingFlow',
    inputSchema: SimulateAnomalyAlertingInputSchema,
    outputSchema: SimulateAnomalyAlertingOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
