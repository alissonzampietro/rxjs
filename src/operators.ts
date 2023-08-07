import { interval, map } from 'rxjs';

export const Interval = () => {
    const intervalo = interval(2000);

    intervalo.pipe(map(data => data * 2)).subscribe(data => {
        console.log(data);
    })
}