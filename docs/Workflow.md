# CrackGuard AI Workflow

CrackGuard AI analyses an uploaded image of a concrete surface and
generates a PDF inspection report for engineering review.

## Current inspection flow

```text
Upload image
  → Detect cracks
  → Estimate area and handle scale
  → Measure length and width
  → Assign a preliminary severity category
  → Generate a PDF report
  → Engineer reviews the results
```

### 1. Detect Agent

Receives the uploaded image and uses a segmentation model to identify
visible cracks. It passes the detected crack regions to the next agent.

### 2. Area Agent

Uses the detected regions to estimate crack area and prepares scale
information for the measurement stage.

### 3. Measure Agent

Uses the detected crack regions and available scale information to estimate
crack length and width.

### 4. Threshold Agent

Applies the prototype's screening thresholds to assign a preliminary
severity category.

### 5. Report Agent

Compiles the inspection findings into a PDF for engineering review.

## How the agents share results

LangGraph runs the stages in order. Each agent reads the image or results
it needs from a shared inspection record, then adds its own results for
the next agent.

## Engineering review

An engineer reviews the image, measurements, and severity category
before deciding whether the crack needs closer inspection, monitoring,
or maintenance.

## Planned workflow additions

- Flag missing or invalid scale references and mark physical dimensions
  as unavailable.
- Compare dated records of the same crack to check for changes over time.

See [README.md](../README.md) for setup and launch instructions.