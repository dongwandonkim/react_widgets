import React from 'react';

export default function Link({ href, children, className }) {
  const onClickHandler = (e) => {
    e.preventDefault();
    window.history.pushState({}, '', href);

    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };

  return (
    <a href={href} className={className} onClick={onClickHandler}>
      {children}
    </a>
  );
}
