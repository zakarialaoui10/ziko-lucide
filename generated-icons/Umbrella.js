import {tags} from 'ziko';
const {svg} = tags;
const Umbrella = (props) => 
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
    tags.path({"d":"M12 13v7a2 2 0 0 0 4 0"}),
	tags.path({"d":"M12 2v2"}),
	tags.path({"d":"M20.992 13a1 1 0 0 0 .97-1.274 10.284 10.284 0 0 0-19.923 0A1 1 0 0 0 3 13z"})
    )
export default Umbrella;
