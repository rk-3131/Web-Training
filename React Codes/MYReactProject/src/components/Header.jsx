export default function Header() {
  return (
    <div>
      <h1>This is the header part</h1>
      <p>and this is the text below the header</p>
    </div>
    // Here two tags h1 and p are combined into a div and hence single div is returned here
  );
  //   The jsx component is used to return the component so that we can get the result
  // But the component should only return single root element
  // if we need to return multiple element they can be enclosed in single root div
}
