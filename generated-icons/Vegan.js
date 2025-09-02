import {tags} from 'ziko';
const {svg} = tags;
const Vegan = (props) => 
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
    tags.path({"d":"M16 8q6 0 6-6-6 0-6 6"}),
	tags.path({"d":"M17.41 3.59a10 10 0 1 0 3 3"}),
	tags.path({"d":"M2 2a26.6 26.6 0 0 1 10 20c.9-6.82 1.5-9.5 4-14"})
    )
export default Vegan;
