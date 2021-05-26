function DropDown(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="prefix__valign-middle prefix__absoluteCenter"
      aria-hidden="true"
      style={{
        width: 32,
        height: 32,
      }}
      overflow="visible"
      fill="currentcolor"
      {...props}
    >
      <path d="M11.96 15.5a.761.761 0 01-.546-.232l-5.188-5.33a.81.81 0 010-1.12c.3-.31.79-.31 1.093 0l4.64 4.767 4.723-4.853c.3-.31.79-.31 1.09 0 .303.31.303.812.002 1.122l-5.27 5.414a.763.763 0 01-.546.232" />
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

export default DropDown;
