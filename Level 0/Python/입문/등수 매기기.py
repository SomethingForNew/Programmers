def solution(score):
    avg_scores = [sum(element) / 2 for element in score]
    sorted_avg_scores = sorted(avg_scores, reverse=True)
    
    answer = []
    
    for avg_score in avg_scores:
        answer.append(sorted_avg_scores.index(avg_score) + 1)
        
    return answer