function solution(dot) {

    return dot[0] < 0 ? ( dot[1] > 0 ? 2 : 3) : ( dot[1] > 0 ? 1 : 4);
}