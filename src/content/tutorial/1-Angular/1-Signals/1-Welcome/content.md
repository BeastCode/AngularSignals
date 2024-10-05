---
type: lesson
title: Introduction
focus: /readme.md
---

# Angular Signals

![Angular Signals](./AngularSignals42.png)

## TL;DR

By leveraging signals, you can build more responsive and performant Angular applications with cleaner and more maintainable code.

## Introducing Signals

Imagine a magical box. Whenever you put something in or take something out, a tiny lightbulb inside the box turns on. This lets everyone know that the box's contents have changed.

Signals are like these magical boxes for your apps. They hold data, and when that data changes, they send a signal to other parts of your app. This makes your app super responsive and up-to-date.

## What are Angular Signals?

Angular Signals are reactive values that efficiently track and propagate data changes within your application. Think of them as dynamic variables that automatically notify components whenever their value updates.

## Key Features of Angular Signals

Angular Signals are special because:

- **They hold your data:** Think of them as containers for your app's information.
- **They're reactive:** When the data inside changes, they automatically let other parts of your app know.
- **They're versatile:** You can store any kind of data in them, from simple numbers to complex objects.
- **They're efficient:** Angular is smart about when to update your app, saving time and resources.
- **They can be writable or computed:** Some signals can be changed directly, while others are calculated based on other signals.

### Let's get started and write some code...

**Click the arrow below to create a signal**

```typescript
import { signal } from "@angular/core";

const count = signal(4);
```
