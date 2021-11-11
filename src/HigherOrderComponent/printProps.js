export const printProps = (Component) => {
  return (props) => {
    console.log(props);
    return <Component {...props} />;
  };
};

// Note: name of hoc should be in camelCase
// how to call hoc?
// support UserInfo is a comppnent

const UserInfoWrapper = printProps(UserInfo);

<UserInfoWrapper a="hello" b="hoc" />;
