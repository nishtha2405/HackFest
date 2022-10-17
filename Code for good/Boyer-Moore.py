#Boyer-Moore Majority voting
nums=[]
n=int(input("Enter no. of terms:"))
while n:
	s=int(input("Enter term:"))
	nums=nums.append(s)
cnt=0
index=0
n=len(nums)
for i in range (n):
	if nums[i]==nums[index]:
		cnt+=1
	else:
		cnt-=1
		if cnt==0:
			index=i
			cnt+=1
print(nums[index])