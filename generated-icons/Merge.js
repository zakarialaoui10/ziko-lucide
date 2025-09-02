import {tags} from 'ziko';
const {svg} = tags;
const Merge = (props) => 
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
    tags.path({"d":"m8 6 4-4 4 4"}),
	tags.path({"d":"M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22"}),
	tags.path({"d":"m20 22-5-5"})
    )
export default Merge;
