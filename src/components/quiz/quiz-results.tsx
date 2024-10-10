import { useQuiz } from '@/context/quiz-context';
import { Checkbox } from '@components/ui/checkbox';
import { cn } from '@/lib/utils';
import { Label } from '@components/ui/label';

export default function QuizResults() {
  const { quiz, answers, timer, correctAnswers, results } = useQuiz();
  return (
    <>
      <div
        className={
          'max-w-[760px] w-full mx-auto flex flex-col gap-8 py-8 px-2'
        }
      >
        <p className={cn('text-center font-bold text-3xl', {
          'text-[#268305]': results >= 75,
          'text-[#E61509]': results < 75
        })}>{results}%</p>
        <p className={'font-semibold md:text-2xl text-center'}>
          {results < 50
            ? 'You will do much better next time. We believe in you!'
            : results < 70
              ? 'We’re getting somewhere. Practice makes perfect!'
              : results < 90
                ? 'Way to go! Keep the momentum. You’re almost there.'
                : 'You’re a quiz master! Keep up the good work!'}
        </p>
        <div
          className={
            'flex flex-col md:flex-row items-center md:justify-around bg-[#FEF2D2] p-4 rounded-xl font-semibold'
          }
        >
          <p className={'text-base'}>Your time: {timer}</p>
          <p className={'text-base text-[#268305]'}>
            Correct: {correctAnswers}
          </p>
          <p className={'text-base text-[#E61509]'}>
            {/*@ts-ignore*/}
            Incorrect: {quiz?.questions?.length - correctAnswers}
          </p>
        </div>
        <p className={'font-semibold text-base text-center'}>
          Your answers
        </p>
      </div>
      {quiz?.questions.map((question, index) => (
        <div
          key={question?.id}
          className={
            'max-w-[760px] w-full gap-y-4 mx-auto flex flex-col md:my-8 py-8 bg-white px-6 rounded-2xl animate-flip-up'
          }
        >
          {/*<div>*/}
          <div className={'place-self-end'}>
            <p
              className={'text-sm text-muted'}
            >{`${index + 1}/${quiz?.questions?.length}`}</p>
          </div>
          <div className={'pb-4'}>
            <p className={'font-semibold text-base'}>
              {question?.question}
            </p>
          </div>
          <div className={'flex flex-col gap-4'}>
            {question?.answers?.map((option) => (
              <div
                key={option?.id}
                className={'flex items-center gap-6 animate-fade-up'}
              >
                <Checkbox
                  id={''}
                  className={
                    'rounded-full bg-white checked:bg-[#063231]'
                  }
                  checked={answers.some(
                    (opt) => opt?.id === option?.id
                  )}
                  disabled
                  // onChange={() => handleOptionSelect(option)}
                />
                <Label
                  className={cn(
                    'border px-2 py-4 rounded-[12px] w-full relative',
                    {
                      'border-[#FF170A]':
                        answers.some((opt) => opt?.id === option?.id) &&
                        option?.correct === 0,
                      'border-[#44C11D]':
                        (answers.some(
                          (opt) => opt?.id === option?.id
                        ) &&
                          option?.correct === 1) ||
                        option.correct === 1,
                    }
                  )}
                >
                  <p>{option?.answer}</p>
                  {answers.some((opt) => opt?.id === option?.id) &&
                    option?.correct === 1 && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="17"
                        viewBox="0 0 16 17"
                        fill="none"
                        className={
                          'absolute right-2 top-1/2 transform -translate-y-1/2'
                        }
                      >
                        <path
                          d="M7.00156 13.5C6.69323 13.5014 6.3942 13.3945 6.15656 13.198L1.61423 9.29203C1.51597 9.20653 1.45471 9.08625 1.44333 8.95651C1.43195 8.82676 1.47135 8.69765 1.55323 8.59636L2.60789 7.30536C2.6502 7.2535 2.70249 7.21067 2.76166 7.17939C2.82083 7.14812 2.88567 7.12904 2.95235 7.12329C3.01903 7.11754 3.08618 7.12523 3.14983 7.14591C3.21348 7.1666 3.27233 7.19985 3.32289 7.2437L6.86823 10.3217L12.5682 4.0647C12.6569 3.96714 12.7805 3.90855 12.9122 3.90168C13.0438 3.89481 13.1729 3.94022 13.2712 4.02803L14.5139 5.14336C14.5629 5.18735 14.6028 5.24059 14.6312 5.30003C14.6596 5.35948 14.676 5.42395 14.6794 5.48974C14.6828 5.55553 14.6732 5.62135 14.6511 5.68341C14.629 5.74547 14.5948 5.80255 14.5506 5.85136L7.99489 13.0577C7.86919 13.1965 7.71592 13.3075 7.54488 13.3836C7.37384 13.4598 7.18879 13.4994 7.00156 13.5Z"
                          fill="url(#paint0_linear_4320_10610)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_4320_10610"
                            x1="8.05989"
                            y1="3.90136"
                            x2="8.05989"
                            y2="13.5"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0.278" stopColor="#65E04D" />
                            <stop offset="0.458" stopColor="#5CD740" />
                            <stop offset="0.79" stopColor="#44C11D" />
                            <stop offset="1" stopColor="#33B004" />
                          </linearGradient>
                        </defs>
                      </svg>
                    )}

                  {answers.some((opt) => opt?.id === option?.id) &&
                    option?.correct === 0 && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="17"
                        viewBox="0 0 16 17"
                        fill="none"
                        className={
                          'absolute right-2 top-1/2 transform -translate-y-1/2'
                        }
                      >
                        <path
                          d="M13.6552 16.5C13.5634 16.5002 13.4725 16.4822 13.3877 16.447C13.3028 16.4118 13.2259 16.3602 13.1611 16.2951L7.99981 11.1338L2.8385 16.2951C2.7075 16.426 2.52986 16.4996 2.34463 16.4996C2.1594 16.4996 1.98176 16.426 1.85076 16.2951L0.204524 14.647C0.0735675 14.516 0 14.3384 0 14.1531C0 13.9679 0.0735675 13.7902 0.204524 13.6593L5.36583 8.49981L0.204524 3.3385C0.0735675 3.2075 0 3.02986 0 2.84463C0 2.6594 0.0735675 2.48176 0.204524 2.35076L1.85262 0.704524C1.98362 0.573568 2.16126 0.5 2.34649 0.5C2.53172 0.5 2.70937 0.573568 2.84036 0.704524L7.99981 5.86583L13.1611 0.704524C13.2921 0.573568 13.4698 0.5 13.655 0.5C13.8402 0.5 14.0179 0.573568 14.1489 0.704524L15.7951 2.35262C15.926 2.48362 15.9996 2.66126 15.9996 2.84649C15.9996 3.03172 15.926 3.20937 15.7951 3.34036L10.6338 8.49981L15.7951 13.6611C15.926 13.7921 15.9996 13.9698 15.9996 14.155C15.9996 14.3402 15.926 14.5179 15.7951 14.6489L14.147 16.2951C14.0825 16.3599 14.0059 16.4114 13.9215 16.4466C13.8371 16.4817 13.7466 16.4999 13.6552 16.5Z"
                          fill="url(#paint0_linear_4320_11847)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_4320_11847"
                            x1="7.99981"
                            y1="0.499618"
                            x2="7.99981"
                            y2="16.5"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#F85E55" />
                            <stop offset="1" stopColor="#D41414" />
                          </linearGradient>
                        </defs>
                      </svg>
                    )}
                </Label>
              </div>
            ))}
          </div>
          {/*</div>*/}
        </div>
      ))}
    </>
  );
}
