## Vue Components
### Naming Components
#### Tightly coupled component names
**Child components that are tightly coupled with their parent should include the parent component name as a prefix.**

If a component only makes sense in the context of a single parent component, that relationship should be evident in its name. Since editors typically organize files alphabetically, this also keeps these related files next to each other.

So, following this rule, I renamed the MainNav to MainHeaderNav.

#### Order of words in component names
Component names should start with the highest-level (often most general) words and end with descriptive modifying words.
