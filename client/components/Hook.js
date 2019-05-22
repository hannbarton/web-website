import React, { useState } from 'react';

function Hook() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {`You clicked ${count} times`}
      <br/>
      <button className='button-count' onClick={() => setCount(count + 1)}>
        Click Me!
      </button>
    </div>
  );
}

export default Hook;
