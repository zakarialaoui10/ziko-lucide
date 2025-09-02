import {tags} from 'ziko';
const {svg} = tags;
const TouchpadOff = (props) => 
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
    tags.path({"d":"M12 20v-6"}),
	tags.path({"d":"M19.656 14H22"}),
	tags.path({"d":"M2 14h12"}),
	tags.path({"d":"m2 2 20 20"}),
	tags.path({"d":"M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2"}),
	tags.path({"d":"M9.656 4H20a2 2 0 0 1 2 2v10.344"})
    )
export default TouchpadOff;
