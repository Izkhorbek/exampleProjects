function SkillIcon(props: any) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path fill="currentColor" d={props.icon} />
    </svg>
  );
}

export default SkillIcon;
