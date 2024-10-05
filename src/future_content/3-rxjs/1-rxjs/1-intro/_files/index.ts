import "./style.css";

import { rx, of, map } from "rxjs";

rx(
  of("World"),
  map((name) => `Hello, ${name}!`)
).subscribe(console.log);

// Open the console in the bottom right to see results.
