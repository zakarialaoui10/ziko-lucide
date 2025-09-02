import {tags} from 'ziko';
const {svg} = tags;
const Scaling = (props) => 
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
    tags.path({"d":"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),
	tags.path({"d":"M14 15H9v-5"}),
	tags.path({"d":"M16 3h5v5"}),
	tags.path({"d":"M21 3 9 15"})
    )
export default Scaling;
