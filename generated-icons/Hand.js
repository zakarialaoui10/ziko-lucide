import {tags} from 'ziko';
const {svg} = tags;
const Hand = (props) => 
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
    tags.path({"d":"M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2"}),
	tags.path({"d":"M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"}),
	tags.path({"d":"M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8"}),
	tags.path({"d":"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"})
    )
export default Hand;
