---
nav:
  title: Components
  path: /components
---

## Button

Demo:

```tsx
import React from 'react';
import { Button } from 'leo-ui';

export default () => {
  const clickHandle = () => {
    console.log('click');
  };
  return (
    <Button title="First Demo" disabled={true} color="primary" onClick={() => clickHandle()}>
      button
    </Button>
  );
};
```
