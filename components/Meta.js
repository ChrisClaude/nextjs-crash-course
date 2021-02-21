import Head from 'next/Head';

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
    </Head>
  );
};

export default Meta;

Meta.defaultProps = {
  title: 'WebDev Newz',
  keywords: 'web development, programming',
  description: 'Get the latest news in web dev',
};
