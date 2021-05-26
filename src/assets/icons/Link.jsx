function Link(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      style={{
        width: 24,
        height: 24,
      }}
      overflow="visible"
      fill="currentcolor"
      {...props}
    >
      <path d="M14.75 18H7.875A1.876 1.876 0 016 16.125V9.25c0-1.036.84-1.875 1.875-1.875h5.11a.5.5 0 010 1h-5.11A.875.875 0 007 9.25v6.875c0 .483.392.875.875.875h6.875a.875.875 0 00.875-.875V11a.5.5 0 011 0v5.125c0 1.035-.84 1.875-1.875 1.875zM14 6.5a.5.5 0 01.5-.5h3a.5.5 0 01.5.5v3a.5.5 0 01-1 0V7.72l-4.66 4.74a.5.5 0 01-.71-.702L16.307 7H14.5a.5.5 0 01-.5-.5z" />
    </svg>
  )
}

export default Link;