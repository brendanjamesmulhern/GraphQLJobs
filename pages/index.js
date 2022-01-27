import { gql, useQuery } from '@apollo/client';
import { Paper, Typography, Card } from '@mui/material';

const Home = () => {
  const { loading, error, data } = useQuery(JOBS_QUERY);
  if (loading) return (
    <Paper className="h-screen w-screen flex justify-center items-center">
      <Typography>Loading..</Typography>
    </Paper>
  )
  else if (error) return (
    <Paper className="h-screen w-screen flex justify-center items-center">
      <Typography>{error}</Typography>
    </Paper>
  )
  else return (
     <Paper className="h-screen w-screen flex justify-center items-center">
    { data ? data.jobs.map(({ title, commitment, applyUrl }) => ( 
        <Card className="h-5/6 w-screen flex justify-center items-center">
          <Typography className="bg-blue-500 w-screen text-center">{title}</Typography>
          <Typography  className="text-center">{commitment.title}</Typography>
          <Typography  className="text-center"><a href={applyUrl}>{applyUrl}</a></Typography>
        </Card>
    )) : null}
    </Paper>
  )
};

const JOBS_QUERY = gql`
  {
  jobs(input: {type:"Graphql", slug:""}) 
  {
    title
    commitment {
      title
    }
    applyUrl
  }
}
`;

export default Home;