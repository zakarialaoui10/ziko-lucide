import {tags} from 'ziko';
const {svg} = tags;
const Pilcrow = (props) => 
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
    tags.path({"d":"M13 4v16"}),
	tags.path({"d":"M17 4v16"}),
	tags.path({"d":"M19 4H9.5a4.5 4.5 0 0 0 0 9H13"})
    )
export default Pilcrow;
