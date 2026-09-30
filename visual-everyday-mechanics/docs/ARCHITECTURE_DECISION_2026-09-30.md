# Architecture Decision — 2026-09-30

## Decision
Use a hybrid AI + deterministic production pipeline.

## Why
Repeated generative attempts failed at Four-in-Hand S2 because image generation inferred strand topology incorrectly.
A deterministic proof successfully represented the required front/behind/front relationships through authored paths and layer ordering.

## Production rule
1. Verify the procedure.
2. Author mechanical states.
3. Validate the mechanical chain without relying on aesthetics.
4. Use the validated motion as control/reference for premium AI generation.
5. QA every AI output against the mechanical source of truth.
6. Reject topology errors even when the output is visually attractive.

## Current video-generation test
Two six-second reference clips were prepared:
- REF_A_S1-S4
- REF_B_S4-S7

The visual target is premium stylized 2.5D Milo, not the schematic control animation.
