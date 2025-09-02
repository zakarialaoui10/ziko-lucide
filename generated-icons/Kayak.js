import {tags} from 'ziko';
const {svg} = tags;
const Kayak = (props) => 
    svg(
        {
        ...{
         "viewBox": "0 0 24 24",
         "fill": "none",
         "width": 24,
         "height": 24,
         "stroke": "green",
         "stroke-width": 2,
         "stroke-linecap": "round",
         "stroke-linejoin": "round"
        },
        ...props
        },
    tags.path({"d":"M18 17a1 1 0 0 0-1 1v1a2 2 0 1 0 2-2z"}),
	tags.path({"d":"M20.97 3.61a.45.45 0 0 0-.58-.58C10.2 6.6 6.6 10.2 3.03 20.39a.45.45 0 0 0 .58.58C13.8 17.4 17.4 13.8 20.97 3.61"}),
	tags.path({"d":"m6.707 6.707 10.586 10.586"}),
	tags.path({"d":"M7 5a2 2 0 1 0-2 2h1a1 1 0 0 0 1-1z"})
    )
export default Kayak;
