class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        // for length 1 and 2

        // find cut point
        let l = 0;
        let r = nums.length - 1;
        let m = Math.ceil((l + r) / 2);
        // console.log({ l, m, r });
        let cutPoint = 0;
        while (l < r) {
            if (nums[l] < nums[m] && nums[m] < nums[r]) {
                cutPoint = l;
                break;
            }
            if (l == m || m == r) {
                if (l == m) cutPoint = nums[l] < nums[m] ? l : m;
                if (m == r) cutPoint = nums[r] < nums[m] ? r : m;
                break;
            }

            if (nums[m] > nums[r]) {
                // cut point is here
                l = m;
                m = Math.ceil((l + r) / 2);
                // console.log({ l, m, r });
            } else if (nums[l] > nums[m]) {
                // cut point is here
                r = m;
                m = Math.ceil((l + r) / 2);
            }
        }
        console.log({ cutPoint });

        // choose segment
        l = 0;
        r = nums.length - 1;

        if (target >= nums[cutPoint] && target <= nums[r]) {
            l = cutPoint;
        } else {
            r = cutPoint - 1;
        }

        // find target
        console.log("find target:", { l, m, r });
        while (l <= r) {
            m = Math.floor((l + r) / 2);

            if (target == nums[m]) return m;

            if (target > nums[m]) {
                l = m + 1;
            } else {
                r = m - 1;
            }
        }

        return -1;
    }
}

// while (l < r) {
//     if (target == nums[m]) {
//         out = m;
//         break;
//     } else if (target > nums[m]) {
//         if (target > nums[r]) {
//         }

//         l = m;
//         if (nums[l] < nums[r]) {
//             m = Math.ceil((l + r) / 2);
//             console.log({ m });
//         } else {
//             // rotated
//             while (l < r && nums[l] > nums[r]) {
//                 r--;
//             }
//             m = Math.ceil((l + r) / 2);
//         }
//     } else {
//         if (target > nums[l]) r = m;
//         if (nums[l] < nums[r]) {
//             m = Math.ceil((l + r) / 2);
//         } else {
//             // rotated
//             while (l < r && nums[l] > nums[r]) {
//                 l++;
//             }
//             m = Math.ceil((l + r) / 2);
//         }
//     }
// }
