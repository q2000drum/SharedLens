# How to Add Documents to SharedLens

## Quick Start

### Step 1: Place Your Document Here

Copy your document to:
```
docs/planning/
```

For example:
- `docs/planning/Shared_Lens_Migration_Framework.pdf`
- `docs/planning/Requirements.docx`
- `docs/planning/Design_Spec.md`

### Step 2: Tell Claude

Simply say:
> "I've added [document name] to docs/planning. Please review it."

Claude can read:
- ✅ PDF files
- ✅ Markdown files (.md)
- ✅ Text files (.txt)
- ✅ Word documents (.docx)
- ✅ Images (screenshots, diagrams)

## Directory Guide

```
docs/
├── planning/          👈 PUT YOUR NEW DOCUMENTS HERE
│   ├── Your framework document
│   ├── Requirements
│   └── Design specs
│
├── reference/         For reference materials
│   ├── API docs
│   ├── Technical specs
│   └── Customer presentations
│
└── archive/           Old/archived work
    └── UOM/           UOM Conflict POC (archived)
```

## What Happens Next

1. **You add document** → `docs/planning/YourDoc.pdf`
2. **Claude reads it** → Analyzes content
3. **We discuss** → Identify 2-3 core features
4. **Create plan** → Focused implementation strategy
5. **Build it** → Simple, focused implementation

## Example

```bash
# Copy your document
cp ~/Downloads/Shared_Lens_Migration_Framework.pdf docs/planning/

# Tell Claude
# "I've added Shared_Lens_Migration_Framework.pdf to docs/planning"
```

Claude will:
- Read the document
- Summarize key points
- Ask clarifying questions
- Help identify what's most important
- Create a focused implementation plan

## Current State

✅ **Cleaned up:**
- Removed complex UOM Conflict features
- Simplified navigation
- Clean slate for new focus

✅ **Ready for:**
- Your new framework document
- Requirements review
- Focused feature implementation

📁 **Waiting for:**
- Your document in `docs/planning/`

## Need Help?

Just tell Claude:
- "How do I add a document?"
- "Where should I put this file?"
- "Can you read my document?"
