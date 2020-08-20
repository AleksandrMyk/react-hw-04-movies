import queryString from 'query-string';

export default function QueryParams(qs) {
  return queryString.parse(qs);
}
// return queryString.parse(this.props.location.search);
