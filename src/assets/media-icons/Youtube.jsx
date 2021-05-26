function Youtube(props) {
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
      <path d="M12 0c6.617 0 12 5.383 12 12s-5.383 12-12 12S0 18.617 0 12 5.383 0 12 0zm4.17 7H8.83C7.267 7 6 8.253 6 9.799V13.2C6 14.747 7.267 16 8.83 16h7.34c1.563 0 2.83-1.253 2.83-2.799V9.8C19 8.253 17.733 7 16.17 7zm-4.844 2.28l3.245 2.069c.143.09.119.32-.027.408l-3.222 1.965c-.14.084-.266-.03-.266-.206V9.484c0-.179.13-.292.27-.203z" />
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

export default Youtube;
