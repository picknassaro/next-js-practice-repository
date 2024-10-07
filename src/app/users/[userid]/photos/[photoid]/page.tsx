interface PhotoPageProps {
  params: { userid: number; photoid: number };
}

const PhotoPage = ({ params: { userid, photoid } }: PhotoPageProps) => {
  return (
    <div>
      User: {userid}, Photo: {photoid}
    </div>
  );
};

export default PhotoPage;
