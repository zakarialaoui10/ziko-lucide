import {tags} from 'ziko';
const {svg} = tags;
const TrainTrack = (props) => 
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
    tags.path({"d":"M2 17 17 2"}),
	tags.path({"d":"m2 14 8 8"}),
	tags.path({"d":"m5 11 8 8"}),
	tags.path({"d":"m8 8 8 8"}),
	tags.path({"d":"m11 5 8 8"}),
	tags.path({"d":"m14 2 8 8"}),
	tags.path({"d":"M7 22 22 7"})
    )
export default TrainTrack;
