import {tags} from 'ziko';
const {svg} = tags;
const TowerControl = (props) => 
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
    tags.path({"d":"M18.2 12.27 20 6H4l1.8 6.27a1 1 0 0 0 .95.73h10.5a1 1 0 0 0 .96-.73Z"}),
	tags.path({"d":"M8 13v9"}),
	tags.path({"d":"M16 22v-9"}),
	tags.path({"d":"m9 6 1 7"}),
	tags.path({"d":"m15 6-1 7"}),
	tags.path({"d":"M12 6V2"}),
	tags.path({"d":"M13 2h-2"})
    )
export default TowerControl;
