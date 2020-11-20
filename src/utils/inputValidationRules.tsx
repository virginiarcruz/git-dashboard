// @ts-nocheck

export default function validate(values) {
  const errors = {};
  if (!values.repo) {
    errors.repo = 'repo/owner is required!';
  }

  // else if (!/\S+@\S+\.\S+/.test(values.repo)) {
  //   errors.repo = 'Email address is invalid';
  // }
  return errors;
}
