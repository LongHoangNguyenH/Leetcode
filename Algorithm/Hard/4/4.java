class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        int nA = nums1.length;
        int nB = nums2.length;
        int n = nA + nB;
        int[] merged = new int[n];
        int k = 0;
        for (int i = 0; i < nA; i++) {
            merged[k++] = nums1[i];
        }
        for (int i = 0; i < nB; i++) {
            merged[k++] = nums2[i];
        }
        Arrays.sort(merged);
        if (merged.length % 2 == 1) return (double) merged[n / 2];
        else {
            return ((double) merged[n / 2] + (double) merged[n / 2 - 1]) / 2.0;
        }
    }
}