function Warning(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="prefix__valign-middle prefix__field__warningIcon prefix__self-end prefix__flex-shrink-none prefix__mb1"
      aria-hidden="true"
      style={{
        width: 24,
        height: 24,
      }}
      overflow="visible"
      fill="currentcolor"
      {...props}
    >
      <path d="M12.65 3.04l7.66 14.165c.264.558-.04 1.2-.662 1.2H4.352c-.622 0-.926-.642-.652-1.22l7.644-14.137c.297-.61 1.025-.606 1.307-.008zM11 8.904v3.192c0 .5.448.904 1 .904s1-.405 1-.904V8.904c0-.5-.448-.904-1-.904s-1 .405-1 .904zM11 15a1 1 0 102 0 1 1 0 00-2 0z" />
    </svg>
  )
}

export default Warning;