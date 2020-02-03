<img src="https://camo.githubusercontent.com/8a8121d9e0fc2678098851e0ef63a36f5c8b199e/68747470733a2f2f7365637572652e6d65657475707374617469632e636f6d2f70686f746f732f6576656e742f612f312f642f612f3630305f3438303532313433342e6a706567">

# TSNYC Jan 2020

---

## What is TypeScript?

TypeScript extends JavaScript by adding types.

TypeScript speeds up your development experience by catching errors and providing fixes before you even run your code.

Any browser, any OS, anywhere JavaScript runs. Entirely Open Source.

---

<img src="https://camo.githubusercontent.com/8a8121d9e0fc2678098851e0ef63a36f5c8b199e/68747470733a2f2f7365637572652e6d65657475707374617469632e636f6d2f70686f746f732f6576656e742f612f312f642f612f3630305f3438303532313433342e6a706567">

## Your organizers: Dan, Jason, Kirill and Orta'

---

### Meetup Format

- Summary of TypeScript changes
- Two or Three 10–20 minute talks: Beginner, Intermediate, Advanced
- Q&As after each talk

Please use #tsnyc on Twitter, Instagram, etc.

We follow the JSConf Code of Conduct

---

## v3.8 Five main features

- Import type
- Private Fields
- Top Level Await
- JSDoc Improvements
- Watch Options

---

## `import type`

### Why?

> ### Guaranteed Side-effect free syntax
>
> Tools like Babel, which don’t type-check can be certain with 100% accuracy whether to remove the import.

<Playground>
// Look at the JS, this isn't included in the output
import {DangerDSLType} from "danger"

declare const myDSL: DangerDSLType

myDSL.bitbucket_cloud

// On the other hand, this one is...
import {danger} from "danger"
danger.git

// But why?

// TS keeps track of whether an import is a "JS" value
// or a TypeScript type.
import {DangerDSLJSONType, message} from "danger"
message

// Babel cannot do this!

// So now Babel knows that it can always skip these
// 'import type' statements
import type {DangerUtilsDSL} from "danger"

// Because they can't be used with "JS" values:
import type {markdown} from "danger"
</Playground>

---

## `import type`

> ### Guaranteed Side-effect-y imports
>
> There are folks who want to rely on importing side-effects, but also import a type from that import

---

```ts
// This statement will get erased because of import elision.
import { SomeTypeFoo, SomeOtherTypeBar } from "./module-with-side-effects";

// This statement always sticks around.
import "./module-with-side-effects";
```
