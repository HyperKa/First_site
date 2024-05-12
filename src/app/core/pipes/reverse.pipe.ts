import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'reverse'
})
export class ReversePipe implements PipeTransform {

    transform(value: Array<any>, options: { isAddingPointInTheEnd: boolean, isAddingTwoPointsInTheEnd: boolean }) {
        console.log(options)

        if (!value) return;

        if (options.isAddingPointInTheEnd) {
            value = value.map(item => item + "!")
        }
        if (options.isAddingTwoPointsInTheEnd) {
            value = value.map(item => item + "??")
        }
        return value.reverse();
    }
}