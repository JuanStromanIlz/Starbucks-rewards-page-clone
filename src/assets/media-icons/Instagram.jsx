function Instagram(props) {
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
      fill= 'rgba(0,0,0,.87)'
      {...props}
    >
      <path d="M12 0c6.617 0 12 5.383 12 12s-5.383 12-12 12S0 18.617 0 12 5.383 0 12 0zm3 5H9a4 4 0 00-4 4v6a4 4 0 004 4h6a4 4 0 004-4V9a4 4 0 00-4-4zm-.235 1.235a3 3 0 013 3v5.53l-.005.176a3 3 0 01-2.995 2.824h-5.53l-.176-.005a3 3 0 01-2.824-2.995v-5.53l.005-.176a3 3 0 012.995-2.824zm-2.97 2.47a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm0 1.236a2.265 2.265 0 110 4.53 2.265 2.265 0 010-4.53zm3.91-2.47a.824.824 0 100 1.647.824.824 0 000-1.647z" />
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

export default Instagram;
