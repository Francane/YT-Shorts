AI VIDEO GENERATION TEST — FOUR-IN-HAND

FIRST MODEL TO TEST
Adobe Firefly Video — Composition Reference.

WHY
Use the deterministic mechanical clips as motion/composition control rather than asking a model to infer tie mechanics from text.

INPUT A
REF_A_S1-S4.mp4
Prompt: PROMPT_A.txt

INPUT B
REF_B_S4-S7.mp4
Prompt: PROMPT_B.txt

QA GATE
Reject any generation that changes:
- which strand is in front/behind;
- wide/narrow identity;
- number of wraps;
- hand identity/handoff;
- S2 center occlusion;
- S5 front-band occlusion;
- final wide-over-narrow arrangement.

AESTHETIC ERRORS are fixable.
TOPOLOGY ERRORS fail the generation.
