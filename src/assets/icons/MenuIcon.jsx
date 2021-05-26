function MenuIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="prefix__valign-middle prefix__absoluteCenter"
      aria-hidden="true"
      style={{
        width: 24,
        height: 24,
      }}
      overflow="visible"
      fill="currentcolor"
      {...props}
    >
      <path
        className="prefix__sb-hamburgerButton-middleLine-CLOSED prefix__sb-hamburgerButton-animation"
        d="M21 12.9H3c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h18c.5 0 .9.4.9.9s-.4.9-.9.9z"
      />
      <path
        className="prefix__sb-hamburgerButton-topLine-CLOSED prefix__sb-hamburgerButton-animation prefix__sb-hamburgerButton-animation-outer-lines"
        d="M21 6.9H3c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h18c.5 0 .9.4.9.9s-.4.9-.9.9z"
      />
      <path
        className="prefix__sb-hamburgerButton-bottomLine-CLOSED prefix__sb-hamburgerButton-animation prefix__sb-hamburgerButton-animation-outer-lines"
        d="M21 18.9H3c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h18c.5 0 .9.4.9.9s-.4.9-.9.9z"
      />
      <circle
        className="prefix__sb-icon-hover"
        fill="transparent"
        cx="50%"
        cy="50%"
        r="75%"
      />
    </svg>
  )
}

export default MenuIcon
