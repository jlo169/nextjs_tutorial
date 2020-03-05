export default (req, res) => {
  res.status(200).json({
    quote: 'Fight for a better tomorrow. Always.',
    author: 'Pugnelius McPugpug'
  });
};