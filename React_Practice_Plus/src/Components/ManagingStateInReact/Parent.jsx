const Parent = ({fruits}) => {
  
  return (
    <>
      <div>
        <h1>Where should the state go?</h1>
        <Fruits fruits={fruits} />
        <FruitsCounter fruits={fruits} />
      </div>
    </>
  );
};

export default Parent;
