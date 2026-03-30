type Props = {
  error: null;
};

function Error({ error }: Props) {
  return <p className="text-red-500">Error: {error}</p>;
}

export default Error;
