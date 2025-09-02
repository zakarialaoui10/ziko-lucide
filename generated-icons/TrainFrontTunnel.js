import {tags} from 'ziko';
const {svg} = tags;
const TrainFrontTunnel = (props) => 
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
    tags.path({"d":"M2 22V12a10 10 0 1 1 20 0v10"}),
	tags.path({"d":"M15 6.8v1.4a3 2.8 0 1 1-6 0V6.8"}),
	tags.path({"d":"M10 15h.01"}),
	tags.path({"d":"M14 15h.01"}),
	tags.path({"d":"M10 19a4 4 0 0 1-4-4v-3a6 6 0 1 1 12 0v3a4 4 0 0 1-4 4Z"}),
	tags.path({"d":"m9 19-2 3"}),
	tags.path({"d":"m15 19 2 3"})
    )
export default TrainFrontTunnel;
