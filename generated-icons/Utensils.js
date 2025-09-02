import {tags} from 'ziko';
const {svg} = tags;
const Utensils = (props) => 
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
    tags.path({"d":"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"}),
	tags.path({"d":"M7 2v20"}),
	tags.path({"d":"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"})
    )
export default Utensils;
