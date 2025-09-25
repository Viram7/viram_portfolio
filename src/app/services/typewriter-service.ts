import { Injectable } from '@angular/core';
import { concat, concatMap, delay, from, interval, of, scan, take } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';

interface TypedWord {
  index: number;
  text: string;
}

@Injectable({
  providedIn: 'root'
})
export class TypewriterService {



 getTypewriterEffectWithColors(titles: string[], typingSpeed = 100, pauseTime = 100) {
    return from(titles).pipe(
      concatMap((title, index) =>
        concat(
          interval(typingSpeed).pipe(
            take(title.length),
            map((i) => ({ index, text: title.slice(0, i + 1) }))
          ),
          of({ index, text: title }).pipe(delay(pauseTime))
        )
      ),
      // accumulate words in sequence
      scan((acc: TypedWord[], curr: TypedWord) => {
        acc[curr.index] = curr; // store each typed word in its position
        return [...acc];
      }, [])
    );
  }



}
