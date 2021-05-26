function Error(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="prefix__valign-middle prefix__fieldStatus__icon"
      aria-hidden="true"
      style={{
        width: 20,
        height: 20,
      }}
      overflow="visible"
      fill="currentcolor"
      {...props}
    >
      <path d="M13.06 12l5.72-5.72a.749.749 0 10-1.06-1.06L12 10.94 6.28 5.22a.749.749 0 10-1.06 1.06L10.94 12l-5.72 5.72a.749.749 0 101.06 1.06L12 13.06l5.72 5.72a.745.745 0 001.06 0 .75.75 0 000-1.06L13.06 12z" />
    </svg>
  )
}

export default Error;